import {envObj} from '../Config/Config'
import { Client, Databases, Storage , ID, Query } from "appwrite";

export class BlogDatabase{
    client = new Client();
    database;
    storage;

    constructor(){
        this.client.setEndpoint(envObj.ENDPOINT)
        .setProject(envObj.PROJECT_ID);

        this.database = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async CreateBlog({title, slug, content, featuredImage, status, userID}){
        try {
            const result = await this.database.createDocument(
                envObj.DATABASE_ID,
                envObj.COLLECTION_ID,
                slug, // this the unique document id that we will be using
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID
                }
            )
            return result
        } catch (error) {
            throw error;
            return null;
        }
    }

    async UpdateBlog(slug, {title, content, featuredImage, status}){
        try {
            return await this.database.updateDocument(
                envObj.DATABASE_ID,
                envObj.COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error
            return null
        }
    }

    async DeleteBlog(slug){
        try {
            return await this.database.deleteDocument(
                envObj.DATABASE_ID,
                envObj.COLLECTION_ID,
                slug
            )
        } catch (error) {
            throw error;
        }
    }

    async GetBlog(slug){
        try {
            return await this.database.getDocument(
                envObj.DATABASE_ID,
                envObj.COLLECTION_ID,
                slug
            )
        } catch (error) {
            throw error;
        }
    }

    // Here in Appwrite you need to make Index only then we will be able to use and make queries
    async GetActiveBlog(query = [Query.equal('status', 'active')]){
        try {
            return await this.database.listDocuments(
                envObj.DATABASE_ID,
                envObj.COLLECTION_ID,
                query
            )
        } catch (error) {
            throw error
        }

    }

    // File Upload

    async UploadFile({featuredImage}){
        try {
            return await this.storage.createFile(
                envObj.BUCKET_ID,
                ID.unique(),
                featuredImage
            )
        } catch (error) {
            throw error
        }
    }

    async DeleteFile({fileId}){
        try {
            return await this.storage.deleteFile(
                envObj.BUCKET_ID,
                fileId
            )
        } catch (error) {
            throw error
        }
    }

    async PreviewFile({fileId}){
        try {
            return await this.storage.getFilePreview(
                envObj.BUCKET_ID,
                fileId
            )
        } catch (error) {
            throw error
        }
    }
}

const blogDatabaseObj = new BlogDatabase()
export default blogDatabaseObj;