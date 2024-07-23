import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'

/**
 * SO Here we are making use of Controller functionality of react hook from which is an event
 * this replaces the functionality of Forwared Ref hoo of React that helps us to get the refeence of form fields to where the form is called/used
 * Here the control parameter that we passed below actually does this lifting work and if takes the reference of all the fields from this form
 * and pass it the to where this form is called and where we will need the data for processing
 * 
 * READ DOCUMENTATION OF REACT HOOK FORM FOR CONTROLLER USE
*/

function RTE({name, control, label, defaultValue=""}) {
  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>
            {label} </label>}

            <Controller
            name={name  || "content"}
            control={control}

        /**
         * Ok so yha render ka matlab hai kis event ko track krega control
         * HEre we are tracking the onChange event of the component that is put inside of the render scope
         * Remember to put the same event on the component as well
         */
            render={({field : {onChange}}) => (
                <Editor
                initialValue={defaultValue}
                init={{
                    initialValue: defaultValue,
                    height: 500,
                    menubar: true,
                    plugins: [
                        "image",
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                        "anchor",
                    ],
                    toolbar:
                    "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                }}
                onEditorChange={onChange}
                />
            )}
            >
            </Controller>
    </div>
  )
}

export default RTE