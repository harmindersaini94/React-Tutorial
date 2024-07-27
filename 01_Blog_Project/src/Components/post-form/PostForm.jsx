import React, {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {Button, Input,Select, RTE } from '../index'
import blogDatabaseObj from '../../Appwrite/Database'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'


/**
* SO yha hume infor chahiye use form se so vo kya kya info hai lets see
* register and handleSubmit, we know that we get from useForm in the last video
* watch: if we need to watch/track any field of a form we can do it
* control: to get control of a form , this is the same control that we will pass to the RTE to get values of that form here
* setValue, can also put some values in the field of other form 
* getValue
*/

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector(state => state.userData);
    console.log("User data state from use Selector " ,userData.$id)

    const submit = async (data) => {

        if (post) {
            const file = data.image[0] ? await blogDatabaseObj.UploadFile(data.image[0]) : null;

            if (file) {
                blogDatabaseObj.DeleteFile(post.featuredImage);
            }

            const dbPost = await blogDatabaseObj.UpdateBlog(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            console.log(data.image[0])
            const file = await blogDatabaseObj.UploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;

                console.log("Helllo", userData)
               
                const dbPost = await blogDatabaseObj.CreateBlog({ ...data, userId: userData.$id });

                console.log("Helllo", data)

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    // SO ye toh chlega harr baar jab user post k title me linkna shuru krega, to setValue automatically isse process krne k baad
    // slug me saath saath likhna jaayega
    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}

                    // Now ye tab chalega jub in case user ne slug wali filed me hi likhna shuru kr diya
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={blogDatabaseObj.PreviewFile(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}