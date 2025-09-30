export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            TinaCMS Admin
          </h1>
          <p className="text-gray-600 mb-4">
            TinaCMS will be loaded here once configured
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-blue-800 text-sm">
              To complete setup:
            </p>
            <ol className="text-blue-800 text-sm text-left mt-2 space-y-1">
              <li>1. Add environment variables to Vercel</li>
              <li>2. Redeploy the site</li>
              <li>3. Visit this page again</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
