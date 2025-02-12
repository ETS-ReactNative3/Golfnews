import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import BasePureComponent from '../../../Core/View/BasePureComponent';

export default class CategoryPlayerView extends BasePureComponent {

    static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.categoryList = [
            {
                name: this.t('certificate'),
                source: this.getResources().ic_certificate
            },
            {
                name: this.t('statistical'),
                source: this.getResources().ic_statistical
            },
            {
                name: this.t('compare_performance'),
                source: this.getResources().ic_compare_level
            },
            {
                name: this.t('chat'),
                source: this.getResources().ic_discuss
            },
            {
                name: this.t('add_friend'),
                source: this.getResources().icon_add_friend
            }
        ];
        this.state = {

        }
    }

    render() {
        let categoryViews = this.categoryList.map((data, index) => {
            return (
                <TouchableOpacity style={styles.touchable_item}
                    onPress={this.onCategoryPress.bind(this, index)}>
                    <View style={styles.view_item}>
                        <Image
                            style={styles.img_icon}
                            source={data.source} />
                        <Text allowFontScaling={global.isScaleFont} style={styles.txt_title}>
                            {data.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={styles.container}>
                {categoryViews}
            </View>
        );
    }

    onCategoryPress(index){
        if(this.props.onCategoryPress){
            this.props.onCategoryPress(index)
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10
    },
    touchable_item: {
        flex: 1,
        minHeight: 50
    },
    view_item: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    img_icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        tintColor: '#00BAB6'
    },
    txt_title: {
        color: '#00BAB6',
        fontSize: 10,
        textAlign: 'center'
    }
});