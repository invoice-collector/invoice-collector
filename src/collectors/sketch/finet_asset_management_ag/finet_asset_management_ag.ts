
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FinetAssetManagementAgCollector extends SketchCollector {

    static CONFIG = {
        id: "finet_asset_management_ag",
        name: "FiNet Asset Management AG",
        description: "i18n.collectors.finet_asset_management_ag.description",
        version: "0",
        website: "https://my.finet.de/portal/tiles/artikel.cfm?ID_Seite=282",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2066542.jpg",
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
        entryUrl: "https://my.finet.de/portal/tiles/artikel.cfm?ID_Seite=282",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FinetAssetManagementAgCollector.CONFIG);
    }
}
