import Cookies from 'js-cookie'

const app={
    state:{
        sideber:{
            opened:'ssss'//!+Cookies.get('sidebarStatus')
        }
    },
    mutations:{
        TOGGLE_SIDEBAR:state=>{
            alert('TOGGLE_SIDEBAR')
            if(state.sideber.opened)
            {
                Cookies.set('sidebarStatus',1)
            }else{
                Cookies.set('sidebarStatus',0)
            }
            state.sideber.opened=!state.sideber.opened
        }
    },
    actions:{
        ToggleSideBar:({commit})=>{
            commit('TOGGLE_SIDEBAR')
        }
    }
}

export default app