import React, { useState } from 'react';

const IssueForm = (props) => {
  const [issue, setIssue] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!issue.trim()) {
      setError('Please describe your issue');
      return;
    }
    
    try {
      const response = await fetch('/api/save-issue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ issue, email, timestamp: new Date().toISOString() }),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setIssue('');
        setEmail('');
        setError('');
        props.actions.handleIssueSaved();
      } else {
        throw new Error('Failed to save issue');
      }
    } catch (error) {
      console.error('Error saving issue:', error);
      setError('Failed to save your issue. Please try again later.');
    }
  };

  if (submitted) {
    return (
      <div className="issue-form-success">
        <p>Thank you for reporting your issue!</p>
        <p>We'll look into it as soon as possible.</p>
      </div>
    );
  }

  return (
    <form className="issue-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="issue">Describe your issue:</label>
        <textarea
          id="issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          placeholder="Please describe the issue you're experiencing..."
          rows={4}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Your email (optional):</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit" className="submit-button">Submit Issue</button>
    </form>
  );
};

export default IssueForm;