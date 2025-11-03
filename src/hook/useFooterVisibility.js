import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { hideFooter, showFooter } from '../redux/slices/footerSlice';
import { clearGlobalCourseId } from '../redux/slices/authSlice';
// import { hideFooter, showFooter } from '../redux/slices/footerSlice';

export const useFooterVisibility = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const hideFooterScreens = ['TaskDetail', 'Assessment', "ChatScreen", "AttendanceDetailScreen", "CourseDetailScreen"];
  const shouldHideFooter = hideFooterScreens.includes(route.name);
  
  useEffect(() => {
    if (shouldHideFooter) {
      dispatch(hideFooter());
    } else {
      dispatch(showFooter());
    }

    // Cleanup when component unmounts
    return () => {
      if (shouldHideFooter) {
        dispatch(showFooter());
      }
    };
  }, [shouldHideFooter, dispatch]);

  return { shouldHideFooter };
};