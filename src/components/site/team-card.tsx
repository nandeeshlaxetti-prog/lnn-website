import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface TeamMember {
  name: string
  role: string
  email: string
  bio: string
  practiceAreas: string[]
  education: string
  barAdmissions: string[]
}

interface TeamCardProps {
  member: TeamMember
}

export function TeamCard({ member }: TeamCardProps) {
  const getRoleVariant = (role: string) => {
    switch (role.toLowerCase()) {
      case "partner":
        return "default"
      case "associate":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{member.name}</CardTitle>
            <CardDescription className="text-sm mt-1">
              {member.education}
            </CardDescription>
          </div>
          <Badge variant={getRoleVariant(member.role)}>
            {member.role}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {member.bio}
        </p>
        
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium text-foreground mb-1">Practice Areas</h4>
            <div className="flex flex-wrap gap-1">
              {member.practiceAreas.map((area) => (
                <Badge key={area} variant="outline" className="text-xs">
                  {area}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-foreground mb-1">Bar Admissions</h4>
            <p className="text-xs text-muted-foreground">
              {member.barAdmissions.join(", ")}
            </p>
          </div>
          
          <div className="pt-2">
            <a
              href={`mailto:${member.email}`}
              className="text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
            >
              {member.email}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}









