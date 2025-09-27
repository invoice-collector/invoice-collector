
import { SketchCollector } from '../../sketchCollector';

export class NewYorkTimesCollector extends SketchCollector {

    static CONFIG = {
        id: "new_york_times",
        name: "New York Times",
        description: "i18n.collectors.new_york_times.description",
        version: "0",
        website: "https://myaccount.nytimes.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8822.jpg",
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
        entryUrl: "https://myaccount.nytimes.com/",
    }

    constructor() {
        super(NewYorkTimesCollector.CONFIG);
    }
}
