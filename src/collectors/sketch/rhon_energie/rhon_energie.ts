
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RhonEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "rhon_energie",
        name: "Rhon Energie",
        description: "i18n.collectors.rhon_energie.description",
        version: "0",
        website: "https://service.re-fd.de/css/index.html#/invoiceOverview/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1534072.jpg",
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
        entryUrl: "https://service.re-fd.de/css/index.html#/invoiceOverview/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RhonEnergieCollector.CONFIG);
    }
}
