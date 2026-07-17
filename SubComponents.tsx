import React from 'react';
import { type Task, type PriorityFilter, type SortOrder } from './type';
import { Panel } from './Panel';
import { subComponentStyles } from './styles';

interface TaskSummaryProps {
  tasks: Task[];
}

export function TaskSummary({ tasks }: TaskSummaryProps) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.done).length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  const todayStr = new Date().toISOString().split('T')[0];
  const overdue = tasks.filter(t => !t.done && t.dueDate < todayStr).length;

  return (
    <Panel title="[集計]">
      <p style={subComponentStyles.summaryText}>
        タスク: {total}件 / 完了: {completed}件 (完了率 {percent}%) / 期限切れ: {overdue}件
      </p>
    </Panel>
  );
}

interface TaskFilterProps {
  priorityFilter: PriorityFilter;
  hideDone: boolean;
  sortOrder: SortOrder;
  onChangePriority: (p: PriorityFilter) => void;
  onChangeHideDone: (h: boolean) => void;
  onChangeSort: (s: SortOrder) => void;
}

export function TaskFilter({
  priorityFilter, hideDone, sortOrder, onChangePriority, onChangeHideDone, onChangeSort
}: TaskFilterProps) {
  const priorities: PriorityFilter[] = ['すべて', '高', '中', '低'];

  return (
    <Panel title="コントロール">
      <div style={subComponentStyles.filterContainer}>
        <div style={subComponentStyles.filterRow}>
          <div>
            <span>絞り込み: </span>
            <div style={subComponentStyles.buttonGroup}>
              {priorities.map(p => (
                <button
                  key={p}
                  type="button"
                  onClick={() => onChangePriority(p)}
                  style={{
                    padding: '4px 12px',
                    border: 'none',
                    backgroundColor: priorityFilter === p ? '#333' : '#fff',
                    color: priorityFilter === p ? '#fff' : '#333',
                    cursor: 'pointer',
                    borderRight: p !== '低' ? '1px solid #ccc' : 'none'
                  }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <label style={subComponentStyles.checkboxLabel}>
            <input 
              type="checkbox" 
              checked={hideDone} 
              onChange={e => onChangeHideDone(e.target.checked)} 
              style={subComponentStyles.checkbox}
            />
            完了を隠す
          </label>
        </div>

        <div>
          <span>並び替え: </span>
          <button 
            type="button" 
            onClick={() => onChangeSort(sortOrder === 'asc' ? 'desc' : 'asc')}
            style={subComponentStyles.sortButton}
          >
            期限が近い順 {sortOrder === 'asc' ? '▲' : '▼'}
          </button>
        </div>
      </div>
    </Panel>
  );
}

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const todayStr = new Date().toISOString().split('T')[0];
  const isOverdue = !task.done && task.dueDate < todayStr;

  const formatMMDD = (dateStr: string) => {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      return `${parts[1]}/${parts[2]}`;
    }
    return dateStr;
  };

  const handleCancelClick = () => {
    if (window.confirm(`「${task.title}」を削除してもよろしいですか？`)) {
      onDelete(task.id);
    }
  };

  return (
    <li style={subComponentStyles.listItem(task.done)}>
      <div style={subComponentStyles.itemRow}>
        <label style={subComponentStyles.itemLabel(task.done)}>
          <input 
            type="checkbox" 
            checked={task.done} 
            onChange={() => onToggle(task.id)} 
            style={subComponentStyles.itemCheckbox}
          />
          <span style={{ fontWeight: 'bold' }}>{task.title}</span>
          {task.done && <span style={subComponentStyles.itemDoneText}>(完了)</span>}
        </label>
        
        <div style={subComponentStyles.itemMeta}>
          <span style={subComponentStyles.itemMetaText}>[{task.priority}]</span>
          <span style={subComponentStyles.itemMetaText}>期限: {formatMMDD(task.dueDate)}</span>
          {isOverdue && <span style={subComponentStyles.overdueText}>⚠️期限切れ</span>}
          <button 
            type="button" 
            onClick={handleCancelClick}
            style={subComponentStyles.deleteButton}
          >
            削除
          </button>
        </div>
      </div>
      {task.memo && (
        <p style={subComponentStyles.memoText}>
          担当: {task.assignee} | メモ: {task.memo}
        </p>
      )}
    </li>
  );
}

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  return (
    <Panel title="タスク一覧">
      {tasks.length === 0 ? <p style={subComponentStyles.emptyText}>該当するタスクはありません。</p> : (
        <ul style={subComponentStyles.list}>
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </Panel>
  );
}