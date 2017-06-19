import React from 'react';
import './Topic.css';

const Topic = ({title, upVotes, downVotes, onUpVoteCallBack, onDownVoteCallBack}) => (
  <li className="Topic list-group-item">
    <h5>{title}</h5>
    <div>
      <button type="button"
              className="btn btn-default"
              onClick={onUpVoteCallBack}>
        UpVote <span className="badge">{upVotes}</span>
        </button>
        <button type="button"
                className="btn btn-default"
                onClick={onDownVoteCallBack}>
        DownVote <span className="badge">{downVotes}</span>
        </button>
    </div>
  </li>
);

export default Topic;
