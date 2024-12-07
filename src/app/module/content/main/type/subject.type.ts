export type TSubject = {
    Id: number,
    Type: string,
    File: string,
    Text: string
};

export type TModalSubjectContent = {
    isOpen: boolean,
    Content: TSubjectContent
};

export type TSubjectContent = {
    Id: number,
    Type: string,
    Text: string,
    BudgetPlaces: number,
    DurationOfTraining: number,
    CostPerYear: number
    Description: string,
};


export const initSubject = (): TSubject => {
    return {
        Id: 0,
        Type: '',
        File: '',
        Text: ''
    };
};

export const initSubjectContent = (): TSubjectContent => {
    return {
        Id: 0,
        Type: '',
        Text: '',
        BudgetPlaces: 0,
        DurationOfTraining: 0,
        CostPerYear: 0,
        Description: '',
    };
};

export const initModalSubjectContent = (): TModalSubjectContent => {
    return {
        isOpen: false,
        Content: initSubjectContent()
    };
};
