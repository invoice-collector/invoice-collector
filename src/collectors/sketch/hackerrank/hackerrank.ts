
import { SketchCollector } from '../../sketchCollector';

export class HackerrankCollector extends SketchCollector {

    static CONFIG = {
        id: "hackerrank",
        name: "Hackerrank",
        description: "i18n.collectors.hackerrank.description",
        version: "0",
        website: "https://www.hackerrank.com/work/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1079786.jpg",
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
        entryUrl: "https://www.hackerrank.com/work/login",
    }

    constructor() {
        super(HackerrankCollector.CONFIG);
    }
}
