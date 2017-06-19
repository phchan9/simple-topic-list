import React from 'react';

const Topic = ({title, upVotes, downVotes, onUpVoteCallBack, onDownVoteCallBack}) => (
  <li className="list-group-item">
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
