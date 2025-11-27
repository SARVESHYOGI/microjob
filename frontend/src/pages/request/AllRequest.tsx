import data from "../../api/data.json";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Link } from "react-router-dom";
export default function AllRequest() {
  const tasks = data.tasks;
  console.log(tasks);

  return (
    <>
      {tasks.map((task) => (
        <>
          <Link to={`/request/${task.id}`}>
            <Card key={task.id} className="mb-4">
              <CardHeader>
                <CardTitle>
                  {task.id}-{task.title}
                </CardTitle>
                <CardDescription>{task.description}</CardDescription>
                <CardAction>
                  <Badge>{task.status}</Badge>
                  <Badge>{task.category}</Badge>
                  <Badge>{task.budget}rs</Badge>
                </CardAction>
              </CardHeader>
              {/* <CardContent>
              {task.location} , {task.building_id}
            </CardContent>
            <CardFooter>
              {task.created_at} - {task?.due_at ? task.due_at : "No due date"}
            </CardFooter> */}
            </Card>
          </Link>
        </>
      ))}
    </>
  );
}
