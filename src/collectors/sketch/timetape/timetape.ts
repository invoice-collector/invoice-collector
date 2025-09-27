
import { SketchCollector } from '../../sketchCollector';

export class TimetapeCollector extends SketchCollector {

    static CONFIG = {
        id: "timetape",
        name: "timetape",
        description: "i18n.collectors.timetape.description",
        version: "0",
        website: "http://www.timetape.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/83489.jpg",
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
        entryUrl: "http://www.timetape.de",
    }

    constructor() {
        super(TimetapeCollector.CONFIG);
    }
}
