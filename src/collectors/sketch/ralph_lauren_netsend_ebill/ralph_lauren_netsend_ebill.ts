
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RalphLaurenNetsendEbillCollector extends SketchCollector {

    static CONFIG = {
        id: "ralph_lauren_netsend_ebill",
        name: "Ralph Lauren Netsend ebill",
        description: "i18n.collectors.ralph_lauren_netsend_ebill.description",
        version: "0",
        website: "https://ebill.nnsend.net/ralp/documents/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/389755.jpg",
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
        entryUrl: "https://ebill.nnsend.net/ralp/documents/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RalphLaurenNetsendEbillCollector.CONFIG);
    }
}
