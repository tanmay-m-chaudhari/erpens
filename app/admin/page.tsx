import { supabaseAdmin } from "@/lib/supabase-admin"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"

async function getContactSubmissions() {
  const { data, error } = await supabaseAdmin
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching submissions:", error)
    return []
  }

  return data || []
}

export default async function AdminPage() {
  const submissions = await getContactSubmissions()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Submissions</h1>
        <p className="text-gray-600">
          Total submissions: <Badge variant="secondary">{submissions.length}</Badge>
        </p>
      </div>

      <div className="grid gap-6">
        {submissions.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-500">No submissions yet.</p>
            </CardContent>
          </Card>
        ) : (
          submissions.map((submission) => (
            <Card key={submission.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{submission.name}</CardTitle>
                    <p className="text-sm text-gray-600">{submission.email}</p>
                    <p className="text-sm text-gray-600">{submission.phone}</p>
                  </div>
                  <Badge variant="outline">
                    {formatDistanceToNow(new Date(submission.created_at), { addSuffix: true })}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 mb-2">Message:</p>
                  <p className="text-gray-800">{submission.message}</p>
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  Submitted: {new Date(submission.created_at).toLocaleString()}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
