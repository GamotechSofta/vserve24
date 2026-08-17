import React, { useState } from 'react';
import { 
  Server, 
  Search, 
  Plus, 
  Power, 
  RotateCw, 
  CheckCircle2, 
  AlertTriangle,
  Cpu,
  Layers,
  HardDrive
} from 'lucide-react';

export default function DeploymentsView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  
  const [deployments, setDeployments] = useState([
    { id: 'dep-1', name: 'neural-core-inference-api', type: 'GPU Compute', region: 'us-east-1', instances: 8, cpu: 78, status: 'Running', cost: '$4.12/hr' },
    { id: 'dep-2', name: 'vserve-auth-redis-cluster', type: 'Cache Storage', region: 'us-west-2', instances: 4, cpu: 32, status: 'Running', cost: '$0.76/hr' },
    { id: 'dep-3', name: 'quantum-mesh-database', type: 'PostgreSQL DB', region: 'eu-central-1', instances: 2, cpu: 14, status: 'Maintenance', cost: '$1.85/hr' },
    { id: 'dep-4', name: 'cdn-media-transcoder-edge', type: 'Serverless Worker', region: 'global', instances: 24, cpu: 62, status: 'Running', cost: '$0.45/hr' },
    { id: 'dep-5', name: 'analytics-clickstream-pipeline', type: 'Kafka Cluster', region: 'ap-southeast-1', instances: 6, cpu: 55, status: 'Running', cost: '$2.10/hr' },
  ]);

  const toggleStatus = (id) => {
    setDeployments(prev => prev.map(dep => {
      if (dep.id === id) {
        const nextStatus = dep.status === 'Running' ? 'Stopped' : 'Running';
        return { ...dep, status: nextStatus };
      }
      return dep;
    }));
  };

  const filtered = deployments.filter(dep => {
    const matchesSearch = dep.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || dep.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center">
            <Server className="w-5 h-5 text-cyan-400 mr-2" />
            Cloud Services & Deployments
          </h2>
          <p className="text-slate-400 text-xs mt-0.5">Manage live compute nodes, databases, and microservices</p>
        </div>

        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-4 py-2 rounded-xl text-xs flex items-center space-x-2 transition-all shadow-lg glow-cyan active:scale-95 cursor-pointer self-start sm:self-auto">
          <Plus className="w-4 h-4" />
          <span>New Deployment</span>
        </button>
      </div>

      {/* Controls Bar */}
      <div className="glass-card p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row gap-3 justify-between items-center">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search deployments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-xl pl-9 pr-4 py-2 focus:outline-none focus:border-cyan-500/50"
          />
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          {['All', 'GPU Compute', 'Cache Storage', 'PostgreSQL DB', 'Serverless Worker'].map(type => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium shrink-0 transition-all cursor-pointer ${
                filterType === type 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Deployments Table */}
      <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900/80 text-slate-400 font-mono uppercase text-[10px] border-b border-slate-800">
              <tr>
                <th className="px-5 py-3.5">Deployment Name</th>
                <th className="px-5 py-3.5">Type & Region</th>
                <th className="px-5 py-3.5">Instances</th>
                <th className="px-5 py-3.5">CPU Load</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Hourly Cost</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              {filtered.map(dep => (
                <tr key={dep.id} className="hover:bg-slate-900/50 transition-colors">
                  <td className="px-5 py-4 font-mono font-medium text-white">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                      <span>{dep.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="text-slate-200 font-medium">{dep.type}</div>
                    <div className="text-slate-500 text-[10px] font-mono">{dep.region}</div>
                  </td>
                  <td className="px-5 py-4 font-mono text-slate-300">
                    {dep.instances} nodes
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-cyan-400 h-full rounded-full" 
                          style={{ width: `${dep.cpu}%` }}
                        ></div>
                      </div>
                      <span className="font-mono text-[11px] text-slate-400">{dep.cpu}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono ${
                      dep.status === 'Running' 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                        : dep.status === 'Maintenance'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }`}>
                      {dep.status === 'Running' ? (
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                      ) : (
                        <AlertTriangle className="w-3 h-3 mr-1" />
                      )}
                      {dep.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right font-mono text-slate-200">
                    {dep.cost}
                  </td>
                  <td className="px-5 py-4 text-right space-x-2">
                    <button
                      onClick={() => toggleStatus(dep.id)}
                      className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                        dep.status === 'Running'
                          ? 'bg-slate-900 border-slate-700 text-rose-400 hover:border-rose-500/50'
                          : 'bg-slate-900 border-slate-700 text-emerald-400 hover:border-emerald-500/50'
                      }`}
                      title="Toggle Power"
                    >
                      <Power className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
