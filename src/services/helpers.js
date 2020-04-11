import store from '../store/index';
import { getMorePhotos, loadingControl } from '../store/actions';

export function convertDate(yourDate) {
    var newDate = new Date(yourDate);
    const dayToday = newDate.getDate();
    const monthToday = newDate.getMonth()+1;
    const yearToday = newDate.getFullYear();
    return "" + dayToday+"-"+ monthToday + "-" + yearToday;
}

export function infinityScroll() {
    	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
            if (window.innerHeight + scrolled >= document.body.clientHeight - 300) {
       			const loadingPhotos = store.getState().photo.loadingPhotos;
                if (!loadingPhotos) {
                	store.dispatch(loadingControl());
                	store.dispatch(getMorePhotos());		    
                }
              
            }
    }


