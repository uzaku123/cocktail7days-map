// src/hooks/useGeolocation.ts
import { useState, useEffect } from 'react';

interface GeolocationState {
  position: [number, number] | null;
  loading: boolean;
  error: string | null;
  accuracy: number | null;
}

export function useGeolocation() {
  const [state, setState] = useState<GeolocationState>({
    position: null,
    loading: true,
    error: null,
    accuracy: null
  });

  const getCurrentPosition = () => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    if (!navigator.geolocation) {
      setState({
        position: null,
        loading: false,
        error: '位置情報サービスに対応していません',
        accuracy: null
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setState({
          position: [pos.coords.latitude, pos.coords.longitude],
          loading: false,
          error: null,
          accuracy: pos.coords.accuracy
        });
      },
      (err) => {
        let errorMessage = '位置情報の取得に失敗しました';
        
        switch(err.code) {
          case err.PERMISSION_DENIED:
            errorMessage = '位置情報の利用が許可されていません';
            break;
          case err.POSITION_UNAVAILABLE:
            errorMessage = '位置情報が利用できません';
            break;
          case err.TIMEOUT:
            errorMessage = '位置情報の取得がタイムアウトしました';
            break;
        }

        setState({
          position: null,
          loading: false,
          error: errorMessage,
          accuracy: null
        });
      },
      {
        enableHighAccuracy: true, // 高精度モード
        timeout: 5000,
        maximumAge: 30000 // 30秒以内のキャッシュを利用
      }
    );
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return { ...state, refreshPosition: getCurrentPosition };
}
