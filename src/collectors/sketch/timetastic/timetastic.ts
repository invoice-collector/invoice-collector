
import { SketchCollector } from '../../sketchCollector';

export class TimetasticCollector extends SketchCollector {

    static CONFIG = {
        id: "timetastic",
        name: "Timetastic",
        description: "i18n.collectors.timetastic.description",
        version: "0",
        website: "https://app.timetastic.co.uk/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8810.jpg",
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
        entryUrl: "https://app.timetastic.co.uk/login/",
    }

    constructor() {
        super(TimetasticCollector.CONFIG);
    }
}
