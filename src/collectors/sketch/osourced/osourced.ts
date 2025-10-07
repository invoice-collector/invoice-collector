
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OsourcedCollector extends SketchCollector {

    static CONFIG = {
        id: "osourced",
        name: "Osourced",
        description: "i18n.collectors.osourced.description",
        version: "0",
        website: "https://osourced.is/de/vadirectory/?login=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2510163.jpg",
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
        entryUrl: "https://osourced.is/de/vadirectory/?login=1",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OsourcedCollector.CONFIG);
    }
}
