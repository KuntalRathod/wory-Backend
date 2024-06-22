import { Router } from 'express';
import { createProject, updateProject, deleteProject, listProjects, getProjectsByTag } from '../controllers/projectController';
import { authenticateJWT, authorizeRole } from '../middlewares/auth';

const router = Router();

router.post('/', authenticateJWT, authorizeRole('Client'), createProject);
router.put('/:projectId', authenticateJWT, authorizeRole('Client'), updateProject);
router.delete('/:projectId', authenticateJWT, authorizeRole('Client'), deleteProject);
router.get('/', listProjects);
router.get('/tag/:tag', getProjectsByTag);

export default router;
