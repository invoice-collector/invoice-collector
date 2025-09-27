
import { SketchCollector } from '../../sketchCollector';

export class CsvboxCollector extends SketchCollector {

    static CONFIG = {
        id: "csvbox",
        name: "csvbox",
        description: "i18n.collectors.csvbox.description",
        version: "0",
        website: "https://app.csvbox.io/user/plans",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1919783.jpg",
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
        entryUrl: "https://app.csvbox.io/user/plans",
    }

    constructor() {
        super(CsvboxCollector.CONFIG);
    }
}
