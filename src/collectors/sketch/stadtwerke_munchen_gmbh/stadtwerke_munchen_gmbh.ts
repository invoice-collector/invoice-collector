
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeMunchenGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_munchen_gmbh",
        name: "Stadtwerke Munchen GmbH",
        description: "i18n.collectors.stadtwerke_munchen_gmbh.description",
        version: "0",
        website: "https://login.muenchen.de/ui/account/login?service=meine-swm&state=web_LyMvYWNjL3ZlcnRyYWdzdWViZXJzaWNodHwxYTdjODY3MS00NzA1LTRkMjEtYWQ3Ni0zZWRhNzZmNGNlYTQ",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1317270.jpg",
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
        entryUrl: "https://login.muenchen.de/ui/account/login?service=meine-swm&state=web_LyMvYWNjL3ZlcnRyYWdzdWViZXJzaWNodHwxYTdjODY3MS00NzA1LTRkMjEtYWQ3Ni0zZWRhNzZmNGNlYTQ",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeMunchenGmbhCollector.CONFIG);
    }
}
