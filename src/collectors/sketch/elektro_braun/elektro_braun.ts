
import { SketchCollector } from '../../sketchCollector';

export class ElektroBraunCollector extends SketchCollector {

    static CONFIG = {
        id: "elektro_braun",
        name: "Elektro Braun",
        description: "i18n.collectors.elektro_braun.description",
        version: "0",
        website: "https://www.elektro-braun.de/kunde-werden/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1389825.jpg",
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
        entryUrl: "https://www.elektro-braun.de/kunde-werden/",
    }

    constructor() {
        super(ElektroBraunCollector.CONFIG);
    }
}
