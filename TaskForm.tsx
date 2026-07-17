import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { taskSchema, type TaskFormData } from './type';
import { Panel } from './Panel';
import { formStyles } from './styles';

interface TaskFormProps {
  onAdd: (data: TaskFormData) => void;
}

export function TaskForm({ onAdd }: TaskFormProps) {
  const todayStr = new Date().toISOString().split('T')[0];

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(taskSchema),
    defaultValues: { 
      title: '', 
      assignee: '', 
      priority: '中', 
      dueDate: todayStr, 
      memo: '' 
    }
  });

  const onSubmit = (data: TaskFormData) => {
    onAdd(data);
    reset({
      title: '',
      assignee: '',
      priority: '中',
      dueDate: todayStr,
      memo: ''
    });
  };

  return (
    <Panel title="▼ 新しいタスクを登録">
      <form onSubmit={handleSubmit(onSubmit)} style={formStyles.form}>
        
        <div style={formStyles.row}>
          <div style={formStyles.field}>
            <label style={formStyles.label}>タスク名</label>
            <input {...register('title')} style={formStyles.input} placeholder="レポート提出など" />
            {errors.title && <div style={formStyles.errorText}>{errors.title.message}</div>}
          </div>
          <div style={{ ...formStyles.field }}>
            <label style={formStyles.label}>担当者</label>
            <input {...register('assignee')} style={formStyles.input} placeholder="山田" />
            {errors.assignee && <div style={formStyles.errorText}>{errors.assignee.message}</div>}
          </div>
        </div>

        <div style={formStyles.rowAlignStart}>
          <div style={formStyles.field}>
            <label style={formStyles.label}>優先度</label>
            <div style={formStyles.radioGroup}>
              <label style={formStyles.radioLabel}>
                <input type="radio" value="高" {...register('priority')} /> 高
              </label>
              <label style={formStyles.radioLabel}>
                <input type="radio" value="中" {...register('priority')} /> 中
              </label>
              <label style={formStyles.radioLabel}>
                <input type="radio" value="低" {...register('priority')} /> 低
              </label>
            </div>
            {errors.priority && <div style={formStyles.errorText}>{errors.priority.message}</div>}
          </div>

          <div style={formStyles.field}>
            <label style={formStyles.label}>期限</label>
            <input type="date" {...register('dueDate')} style={formStyles.input} />
            {errors.dueDate && <div style={formStyles.errorText}>{errors.dueDate.message}</div>}
          </div>
        </div>

        <div>
          <label style={formStyles.label}>メモ (任意)</label>
          <input {...register('memo')} style={formStyles.input} placeholder="補足情報など" />
          {errors.memo && <div style={formStyles.errorText}>{errors.memo.message}</div>}
        </div>

        <div style={formStyles.submitRow}>
          <button type="submit" style={formStyles.submitButton}>
            登録する
          </button>
        </div>
      </form>
    </Panel>
  );
}