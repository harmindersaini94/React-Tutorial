export const envObj = {
ENDPOINT: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
PROJECT_ID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
DATABASE_ID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
COLLECTION_ID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
BUCKET_ID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
TINYMCE_API_KEY: String(import.meta.env.VITE_APPWRITE_TINYMCE_API_KEY)
}

