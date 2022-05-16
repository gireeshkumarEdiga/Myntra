export const ADDTOCART = "ADDTOCART"
export const REMOVECART = "REMOVECART"
export const ADJUSTQTY = " ADJUSTQTY"
export const CURRENTITEM = "CURRENTITEM"


export const addCart = (id) => {
	return {
		type: ADDTOCART,
		payload:{
		 id:id
		}
	}
	
}
export const removeCart = (id) => {
	return {
		type: REMOVECART,
		payload:{
		 id:id
		}
	}
	
}

export const adjustQty = (id,value) => {
	return {
		type: ADJUSTQTY,
		payload:{
		 id:id,
		 qty:value

		}
	}
	
}

export const currentItem = (id,value) => {
	return {
		type: CURRENTITEM,
		payload:{
		 id:id,
		 qty:value
		}
	}
	
}


