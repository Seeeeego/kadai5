import React from 'react';

export const appStyles = {
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    fontFamily: 'sans-serif',
    border: '2px solid #333',
    borderRadius: '8px',
    backgroundColor: '#fefefe'
  } as React.CSSProperties,
  header: {
    margin: '0 0 16px 0',
    paddingBottom: '8px',
    borderBottom: '2px solid #333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  } as React.CSSProperties,
  formContainer: {
    marginTop: '24px'
  } as React.CSSProperties
};

export const panelStyles = {
  container: {
    border: '1px solid #ccc',
    padding: '16px',
    margin: '8px 0',
    borderRadius: '4px'
  } as React.CSSProperties,
  title: {
    marginTop: 0
  } as React.CSSProperties
};

export const subComponentStyles = {
  summaryText: {
    margin: 0,
    fontWeight: 'bold'
  } as React.CSSProperties,
  filterContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  } as React.CSSProperties,
  filterRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap'
  } as React.CSSProperties,
  buttonGroup: {
    display: 'inline-flex',
    border: '1px solid #ccc',
    borderRadius: '4px',
    overflow: 'hidden'
  } as React.CSSProperties,
  checkboxLabel: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center'
  } as React.CSSProperties,
  checkbox: {
    marginRight: '4px'
  } as React.CSSProperties,
  sortButton: {
    padding: '4px 8px',
    cursor: 'pointer'
  } as React.CSSProperties,
  listItem: (done: boolean) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '8px 0',
    borderBottom: '1px solid #eee',
    color: done ? '#aaa' : '#000'
  } as React.CSSProperties),
  itemRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  } as React.CSSProperties,
  itemLabel: (done: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: done ? 'line-through' : 'none'
  } as React.CSSProperties),
  itemCheckbox: {
    marginRight: '8px'
  } as React.CSSProperties,
  itemDoneText: {
    marginLeft: '8px',
    color: '#888'
  } as React.CSSProperties,
  itemMeta: {
    fontSize: '0.9em'
  } as React.CSSProperties,
  itemMetaText: {
    marginRight: '12px'
  } as React.CSSProperties,
  overdueText: {
    color: 'red',
    fontWeight: 'bold'
  } as React.CSSProperties,
  deleteButton: {
    backgroundColor: '#ff4d4f',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '2px 8px',
    cursor: 'pointer'
  } as React.CSSProperties,
  memoText: {
    fontSize: '0.85em',
    color: '#666',
    margin: '4px 0 0 24px'
  } as React.CSSProperties,
  emptyText: {
    color: '#888'
  } as React.CSSProperties,
  list: {
    listStyle: 'none',
    paddingLeft: 0,
    margin: 0
  } as React.CSSProperties
};

export const formStyles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  } as React.CSSProperties,
  row: {
    display: 'flex',
    gap: '16px'
  } as React.CSSProperties,
  rowAlignStart: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start'
  } as React.CSSProperties,
  field: {
    flex: 1
  } as React.CSSProperties,
  label: {
    display: 'block',
    marginBottom: '4px'
  } as React.CSSProperties,
  input: {
    width: '100%',
    padding: '4px'
  } as React.CSSProperties,
  radioGroup: {
    display: 'flex',
    gap: '12px',
    paddingTop: '4px'
  } as React.CSSProperties,
  radioLabel: {
    cursor: 'pointer'
  } as React.CSSProperties,
  errorText: {
    color: 'red',
    fontSize: '0.8em'
  } as React.CSSProperties,
  submitRow: {
    display: 'flex',
    justifyContent: 'flex-end'
  } as React.CSSProperties,
  submitButton: {
    padding: '6px 20px',
    cursor: 'pointer',
    fontWeight: 'bold'
  } as React.CSSProperties
};