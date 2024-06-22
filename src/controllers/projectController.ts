import { Request, Response } from 'express';
import { Project } from '../models/Project';

interface AuthRequest extends Request {
  user?: any;
}

export const createProject = async (req: AuthRequest, res: Response) => {
  const { title, description, tags } = req.body;

  try {
    const newProject = new Project({ title, description, clientId: req.user.id, tags });
    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const updateProject = async (req: AuthRequest, res: Response) => {
  const { projectId } = req.params;
  const { title, description, tags } = req.body;

  try {
    const project = await Project.findOneAndUpdate({ _id: projectId, clientId: req.user.id }, { title, description, tags }, { new: true });

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const deleteProject = async (req: AuthRequest, res: Response) => {
  const { projectId } = req.params;

  try {
    const project = await Project.findOneAndDelete({ _id: projectId, clientId: req.user.id });

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const listProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const getProjectsByTag = async (req: Request, res: Response) => {
  const { tag } = req.params;

  try {
    const projects = await Project.find({ tags: tag });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
