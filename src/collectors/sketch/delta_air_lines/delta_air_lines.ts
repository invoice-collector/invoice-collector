
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DeltaAirLinesCollector extends SketchCollector {

    static CONFIG = {
        id: "delta_air_lines",
        name: "Delta Air Lines",
        description: "i18n.collectors.delta_air_lines.description",
        version: "0",
        website: "https://www.delta.com/mydelta/walletMyReceiptSummary",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1224.jpg",
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
        entryUrl: "https://www.delta.com/mydelta/walletMyReceiptSummary",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeltaAirLinesCollector.CONFIG);
    }
}
