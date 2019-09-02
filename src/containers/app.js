import React from 'react';
import { connect } from 'react-redux';

import CommentForm from '../components/comment-form.js';
import CommentList from '../components/comments-list.js';

import { isEmptyString } from '../actions/utils.js';

import { removeComment, addNewComment, changeElForm } from '../actions/index.js';
import css from '../style.css';


