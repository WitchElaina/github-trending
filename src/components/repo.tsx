import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

import { Repository } from '@/lib/api';

export const Repo: React.FC<{ repo: Repository }> = ({ repo }) => {
  return (
    <Card className="flex-row m-5 font-notosans">
      <CardHeader className="flex space-y-3 p-6 pb-3">
        <CardTitle>
          {repo.author} / {repo.name}
        </CardTitle>
        <div className="flex items-center space-x-2">
          <Badge className="h-4" style={{ backgroundColor: repo.languageColor }}>
            {repo.language}
          </Badge>
          <Badge className="h-4" variant="outline">
            {repo.stars} stars
          </Badge>
          <Badge className="h-4" variant="outline">
            {repo.forks} forks
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0 pb-3">
        <CardDescription>{repo.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 pb-6">
        {/* Contributors */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-500 text-xs">Built by:</span>
          <div className="flex items-center space-x-1">
            {repo.builtBy.map((contributor) => {
              return (
                <Avatar key={contributor.username} className="w-4 h-4">
                  <AvatarImage src={contributor.avatar} alt={contributor.username} />
                </Avatar>
              );
            })}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
