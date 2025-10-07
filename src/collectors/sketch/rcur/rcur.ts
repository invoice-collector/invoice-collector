
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RcurCollector extends SketchCollector {

    static CONFIG = {
        id: "rcur",
        name: "RCUR",
        description: "i18n.collectors.rcur.description",
        version: "0",
        website: "https://rcur.app/app/settings/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3206425.jpg",
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
        entryUrl: "https://rcur.app/app/settings/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RcurCollector.CONFIG);
    }
}
