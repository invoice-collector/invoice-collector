
import { SketchCollector } from '../../sketchCollector';

export class UnityAssetStoreCollector extends SketchCollector {

    static CONFIG = {
        id: "unity_asset_store",
        name: "Unity Asset Store",
        description: "i18n.collectors.unity_asset_store.description",
        version: "0",
        website: "https://assetstore.unity.com/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2848424.jpg",
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
        entryUrl: "https://assetstore.unity.com/orders",
    }

    constructor() {
        super(UnityAssetStoreCollector.CONFIG);
    }
}
