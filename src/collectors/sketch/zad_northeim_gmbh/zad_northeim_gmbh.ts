
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ZadNortheimGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "zad_northeim_gmbh",
        name: "ZAD-Northeim GmbH",
        description: "i18n.collectors.zad_northeim_gmbh.description",
        version: "0",
        website: "https://www.zad-online.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/435450.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.zad-online.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZadNortheimGmbhCollector.CONFIG);
    }
}
