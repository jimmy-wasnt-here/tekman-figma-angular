import { Session } from "./session.model";

export class Course {
    id: string;
    name: string;
    totalSessions: number;
    completedSessions: number;
    sessions: Session[];
}
