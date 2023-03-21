import request from '@/utils/request';

/**
 * 
 *
 * @author cao
 * @email object_czx@163.com
 * @date 2023-03-21 16:51:18
 */
export function useFileApi() {
	return {
		list: (params) => {
		return request({
			url: '/file/doc/list',
			method: 'get',
			params
		});
},
	add: (params) => {
		return request({
							url: '/file/doc/save',
				method: 'post',
						data: params
		});
	},
	update: (params) => {
		return request({
							url: '/file/doc/update',
				method: 'post',
						data: params
		});
	},
	delete: (params) => {
		return request({
							url: '/file/doc/delete',
				method: 'post',
						data: params
		});
	}
};
}
