import { Subject } from 'rxjs';

const subject = new Subject();

export const dataService = {
    setData: show => subject.next({ value: show }),
    clearData: () => subject.next(),
    getData: () => subject.asObservable()
};

export default dataService