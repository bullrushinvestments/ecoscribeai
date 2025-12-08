import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface Requirement {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [newRequirementName, setNewRequirementName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
      setRequirements(response.data);
    } catch (error) {
      toast.error('Failed to load requirements.');
    } finally {
      setLoading(false);
    }
  };

  const addNewRequirement = async () => {
    try {
      if (!newRequirementName.trim()) return;
      setLoading(true);
      await axios.post<Requirement>('https://api.example.com/requirements', { name: newRequirementName });
      setRequirements([...requirements, { id: requirements.length + 1, name: newRequirementName, description: '', isCompleted: false }]);
      setNewRequirementName('');
    } catch (error) {
      toast.error('Failed to add requirement.');
    } finally {
      setLoading(false);
    }
  };

  const completeRequirement = async (id: number) => {
    try {
      await axios.put(`https://api.example.com/requirements/${id}`, { isCompleted: true });
      setRequirements(requirements.map(req => req.id === id ? { ...req, isCompleted: true } : req));
    } catch (error) {
      toast.error('Failed to complete requirement.');
    }
  };

  const navigateToRequirement = (id: number) => {
    navigate(`/requirements/${id}`);
  };

  return (
    <div className="p-4">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1 className="text-xl font-bold mb-2">Gather Requirements</h1>
          <input
            type="text"
            value={newRequirementName}
            onChange={(e) => setNewRequirementName(e.target.value)}
            placeholder="Add new requirement..."
            className="border p-2 rounded mb-4 w-full"
            aria-label="add-new-requirement-input"
            onKeyDown={(e) => e.key === 'Enter' && addNewRequirement()}
          />
          <ul role="list" className="divide-y divide-gray-200">
            {requirements.map((req) => (
              <li key={req.id} className="flex justify-between items-center py-4">
                <div>
                  <span
                    onClick={() => navigateToRequirement(req.id)}
                    onKeyDown={(e) => e.key === 'Enter' && navigateToRequirement(req.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View requirement ${req.name}`}
                    className={`${req.isCompleted ? 'line-through text-gray-500' : ''} cursor-pointer`}
                  >
                    {req.name}
                  </span>
                </div>
                <button
                  onClick={() => completeRequirement(req.id)}
                  disabled={req.isCompleted}
                  aria-label={`Mark requirement ${req.name} as completed`}
                  className="text-blue-600 hover:text-blue-900"
                >
                  {req.isCompleted ? 'Completed' : 'Complete'}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface Requirement {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [newRequirementName, setNewRequirementName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
      setRequirements(response.data);
    } catch (error) {
      toast.error('Failed to load requirements.');
    } finally {
      setLoading(false);
    }
  };

  const addNewRequirement = async () => {
    try {
      if (!newRequirementName.trim()) return;
      setLoading(true);
      await axios.post<Requirement>('https://api.example.com/requirements', { name: newRequirementName });
      setRequirements([...requirements, { id: requirements.length + 1, name: newRequirementName, description: '', isCompleted: false }]);
      setNewRequirementName('');
    } catch (error) {
      toast.error('Failed to add requirement.');
    } finally {
      setLoading(false);
    }
  };

  const completeRequirement = async (id: number) => {
    try {
      await axios.put(`https://api.example.com/requirements/${id}`, { isCompleted: true });
      setRequirements(requirements.map(req => req.id === id ? { ...req, isCompleted: true } : req));
    } catch (error) {
      toast.error('Failed to complete requirement.');
    }
  };

  const navigateToRequirement = (id: number) => {
    navigate(`/requirements/${id}`);
  };

  return (
    <div className="p-4">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1 className="text-xl font-bold mb-2">Gather Requirements</h1>
          <input
            type="text"
            value={newRequirementName}
            onChange={(e) => setNewRequirementName(e.target.value)}
            placeholder="Add new requirement..."
            className="border p-2 rounded mb-4 w-full"
            aria-label="add-new-requirement-input"
            onKeyDown={(e) => e.key === 'Enter' && addNewRequirement()}
          />
          <ul role="list" className="divide-y divide-gray-200">
            {requirements.map((req) => (
              <li key={req.id} className="flex justify-between items-center py-4">
                <div>
                  <span
                    onClick={() => navigateToRequirement(req.id)}
                    onKeyDown={(e) => e.key === 'Enter' && navigateToRequirement(req.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View requirement ${req.name}`}
                    className={`${req.isCompleted ? 'line-through text-gray-500' : ''} cursor-pointer`}
                  >
                    {req.name}
                  </span>
                </div>
                <button
                  onClick={() => completeRequirement(req.id)}
                  disabled={req.isCompleted}
                  aria-label={`Mark requirement ${req.name} as completed`}
                  className="text-blue-600 hover:text-blue-900"
                >
                  {req.isCompleted ? 'Completed' : 'Complete'}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default GatherRequirements;