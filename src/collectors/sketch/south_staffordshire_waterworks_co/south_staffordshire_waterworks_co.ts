
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SouthStaffordshireWaterworksCoCollector extends SketchCollector {

    static CONFIG = {
        id: "south_staffordshire_waterworks_co",
        name: "SOUTH STAFFORDSHIRE WATERWORKS CO  ",
        description: "i18n.collectors.south_staffordshire_waterworks_co.description",
        version: "0",
        website: "https://myaccount.sourceforbusiness.co.uk/Login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153543.jpg",
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
        entryUrl: "https://myaccount.sourceforbusiness.co.uk/Login.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SouthStaffordshireWaterworksCoCollector.CONFIG);
    }
}
