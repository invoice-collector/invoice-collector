
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WasteConnectionsCanadaCollector extends SketchCollector {

    static CONFIG = {
        id: "waste_connections_canada",
        name: "Waste Connections Canada",
        description: "i18n.collectors.waste_connections_canada.description",
        version: "0",
        website: "https://secure6.i-doxs.net/bdx/default.aspx?BillerID=H1ol0uvn2h",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/117018.jpg",
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
        entryUrl: "https://secure6.i-doxs.net/bdx/default.aspx?BillerID=H1ol0uvn2h",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WasteConnectionsCanadaCollector.CONFIG);
    }
}
