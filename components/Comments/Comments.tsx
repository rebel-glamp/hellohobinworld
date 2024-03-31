import * as React from 'react';
import { useState } from 'react';

import axios from 'axios';
import cs from 'classnames';
import { formatDistance } from 'date-fns';
import ko from 'date-fns/locale/ko';
import { useFormik } from 'formik';
import useSWR from 'swr';

import { ExtendedRecordMap } from 'packages/notion-types';

interface CommentsProps {
  pageId: string;
  recordMap: ExtendedRecordMap;
}

const Comments = ({ pageId, recordMap }: CommentsProps) => {
  const [loading, setLoading] = useState(false);

  const apiUrl = `/api/comments/${pageId}`;
  const fetcher = (apiUrl) => fetch(apiUrl).then((r) => r.json());
  const { data, mutate } = useSWR(apiUrl, fetcher);
  
  const formik = useFormik({
    initialValues: {
      content: '',
    },
    onSubmit: async values => {
      if (values.content.trim()) {
        setLoading(true);

        try {
          await axios.post(`/api/comments/${pageId}`, {
            content: values.content.trim(),
          });

          formik.resetForm();
          await mutate();
        } finally {
          setLoading(false);
        }
      }
    },
  });

  const comments = (data?.results || []).map(item => {    
    const user = recordMap.notion_user[item.created_by.id]?.value || {
      id: 'guest',
      name: '익명',
      profile_photo: '/comment.png',
    };

    return {
      id: item.id,
      user: user,
      text: item?.rich_text?.[0]?.plain_text || '내용을 불러올 수 없습니다.',
      isOwner: user?.id !== 'guest',
      createdAt: formatDistance(new Date(), new Date(item.created_time), {
        locale: ko,
      }),
    };
  });

  return (
    <div className="notion-comments">
      <h2 className="notion-h notion-h1">댓글</h2>

      <form className={cs('item', loading && 'loading')} onSubmit={formik.handleSubmit}>
        <img className="profileImage guest" src="/comment.png" alt="guest" />

        <div className="right">
          <div className="content">
            <div className="bg" />
            <textarea
              name="content"
              placeholder={`안녕하세요 👋\n언제든지 댓글이나 메시지로 연락해주세요. \n함께 이야기를 나누는 것을 기대합니다. 감사합니다!`}
              rows={6}
              value={formik.values.content}
              onChange={formik.handleChange}
            />

            <button type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="m16.336,13.252l1.33,1.493c-.103.092-2.559,2.254-5.666,2.254s-5.563-2.162-5.666-2.254l1.332-1.491c.018.016,2.003,1.746,4.334,1.746s4.316-1.73,4.336-1.748Zm-7.836-2.252c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5,1.5.672,1.5,1.5,1.5Zm7,0c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5,1.5.672,1.5,1.5,1.5Zm8.5,1v12h-12C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12Zm-2,0c0-5.514-4.486-10-10-10S2,6.486,2,12s4.486,10,10,10h10v-10Z"></path>
                {/* <circle cx="9.5" cy="11.5" r="1.5"></circle>
                <circle cx="14.5" cy="11.5" r="1.5"></circle> */}
              </svg>
            </button>
          </div>
        </div>
      </form>

      <div className="items">
        {comments.map(item => (
          <div key={item.id} className={cs('item', item.isOwner && 'reverse')}>
            <img
              className={cs('profileImage', item.user.id === 'guest' && 'guest')}
              src={item.user.profile_photo}
              alt={item.user.name}
            />

            <div className="right">
              <div className="content">
                <div className="bg" />
                <div className="texts">
                  {item.text.split('\n').map((text, i) => (
                    <React.Fragment key={i}>
                      {text}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="profile">
                <div className="name">
                  {item.isOwner && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z"></path>
                      <path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z"></path>
                    </svg>
                  )}

                  {item.user.name}
                </div>

                <div className="createdAt">{item.createdAt}전</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;