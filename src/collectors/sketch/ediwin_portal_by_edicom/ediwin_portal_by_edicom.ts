
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EdiwinPortalByEdicomCollector extends SketchCollector {

    static CONFIG = {
        id: "ediwin_portal_by_edicom",
        name: "Ediwin Portal by EDICOM",
        description: "i18n.collectors.ediwin_portal_by_edicom.description",
        version: "0",
        website: "https://ediwin.edicomgroup.com/app#/docs/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3015305.jpg",
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
        entryUrl: "https://ediwin.edicomgroup.com/app#/docs/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EdiwinPortalByEdicomCollector.CONFIG);
    }
}
