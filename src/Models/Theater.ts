export interface Theater {
    theatherId: number, 
    name: string, 

    state: string,

    city: string, 

    zipcode: string

    seatCapacity: number, 
    isEditable? : boolean, 
    isNew?: boolean, 
    editableTheather?: Theater
} 