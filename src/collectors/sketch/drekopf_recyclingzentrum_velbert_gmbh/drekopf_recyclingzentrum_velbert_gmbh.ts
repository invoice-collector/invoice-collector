
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DrekopfRecyclingzentrumVelbertGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "drekopf_recyclingzentrum_velbert_gmbh",
        name: "Drekopf Recyclingzentrum Velbert GmbH",
        description: "i18n.collectors.drekopf_recyclingzentrum_velbert_gmbh.description",
        version: "0",
        website: "https://www.drekopf.de/unternehmen/standorte/velbert/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1272443.jpg",
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
        entryUrl: "https://www.drekopf.de/unternehmen/standorte/velbert/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DrekopfRecyclingzentrumVelbertGmbhCollector.CONFIG);
    }
}
