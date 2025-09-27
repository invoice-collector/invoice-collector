
import { SketchCollector } from '../../sketchCollector';

export class AddpeopleCollector extends SketchCollector {

    static CONFIG = {
        id: "addpeople",
        name: "AddPeople",
        description: "i18n.collectors.addpeople.description",
        version: "0",
        website: "https://members.addpeople.co.uk/?utm_source=emailmarketing&utm_medium=email&utm_campaign=5be3fb16387d7_15874&utm_content=2019-10-09&cid=Brr5jrOyZlxmd5xwH1jFE1EOLUTA1IUYdK68J0wk5bdl6RrEjD6Hd64o0-3TZrlQwOlFRdTDxH0Hq08pXM6OTg..",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/170842.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://members.addpeople.co.uk/?utm_source=emailmarketing&utm_medium=email&utm_campaign=5be3fb16387d7_15874&utm_content=2019-10-09&cid=Brr5jrOyZlxmd5xwH1jFE1EOLUTA1IUYdK68J0wk5bdl6RrEjD6Hd64o0-3TZrlQwOlFRdTDxH0Hq08pXM6OTg..",
    }

    constructor() {
        super(AddpeopleCollector.CONFIG);
    }
}
