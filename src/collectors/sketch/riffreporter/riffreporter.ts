
import { SketchCollector } from '../../sketchCollector';

export class RiffreporterCollector extends SketchCollector {

    static CONFIG = {
        id: "riffreporter",
        name: "RiffReporter",
        description: "i18n.collectors.riffreporter.description",
        version: "0",
        website: "https://www.riffreporter.de/de/kaeufe",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1985681.jpg",
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
        entryUrl: "https://www.riffreporter.de/de/kaeufe",
    }

    constructor() {
        super(RiffreporterCollector.CONFIG);
    }
}
