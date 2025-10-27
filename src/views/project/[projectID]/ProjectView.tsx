import { useParams } from "react-router-dom";

export const ProjectView: React.FC = () => {
  const { projectID } = useParams();
  return <div>Project ID: {projectID}</div>;
};
